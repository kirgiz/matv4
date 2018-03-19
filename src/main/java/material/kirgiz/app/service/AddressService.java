package material.kirgiz.app.service;

import material.kirgiz.app.domain.Address;
import material.kirgiz.app.repository.AddressRepository;
import material.kirgiz.app.repository.search.AddressSearchRepository;
import material.kirgiz.app.service.dto.AddressDTO;
import material.kirgiz.app.service.mapper.AddressMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Address.
 */
@Service
@Transactional
public class AddressService {

    private final Logger log = LoggerFactory.getLogger(AddressService.class);

    private final AddressRepository addressRepository;

    private final AddressMapper addressMapper;

    private final AddressSearchRepository addressSearchRepository;

    public AddressService(AddressRepository addressRepository, AddressMapper addressMapper, AddressSearchRepository addressSearchRepository) {
        this.addressRepository = addressRepository;
        this.addressMapper = addressMapper;
        this.addressSearchRepository = addressSearchRepository;
    }

    /**
     * Save a address.
     *
     * @param addressDTO the entity to save
     * @return the persisted entity
     */
    public AddressDTO save(AddressDTO addressDTO) {
        log.debug("Request to save Address : {}", addressDTO);
        Address address = addressMapper.toEntity(addressDTO);
        address = addressRepository.save(address);
        AddressDTO result = addressMapper.toDto(address);
        addressSearchRepository.save(address);
        return result;
    }

    /**
     * Get all the addresses.
     *
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<AddressDTO> findAll() {
        log.debug("Request to get all Addresses");
        return addressRepository.findAll().stream()
            .map(addressMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one address by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public AddressDTO findOne(Long id) {
        log.debug("Request to get Address : {}", id);
        Address address = addressRepository.findOne(id);
        return addressMapper.toDto(address);
    }

    /**
     * Delete the address by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Address : {}", id);
        addressRepository.delete(id);
        addressSearchRepository.delete(id);
    }

    /**
     * Search for the address corresponding to the query.
     *
     * @param query the query of the search
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<AddressDTO> search(String query) {
        log.debug("Request to search Addresses for query {}", query);
        return StreamSupport
            .stream(addressSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .map(addressMapper::toDto)
            .collect(Collectors.toList());
    }
}
