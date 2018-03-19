package material.kirgiz.app.service.mapper;

import material.kirgiz.app.domain.*;
import material.kirgiz.app.service.dto.LotDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Lot and its DTO LotDTO.
 */
@Mapper(componentModel = "spring", uses = {CurrencyMapper.class})
public interface LotMapper extends EntityMapper<LotDTO, Lot> {

    @Mapping(source = "buycurrencylot.id", target = "buycurrencylotId")
    @Mapping(source = "buycurrencylot.iSOCode", target = "buycurrencylotISOCode")
    @Mapping(source = "sellcurrencylot.id", target = "sellcurrencylotId")
    @Mapping(source = "sellcurrencylot.iSOCode", target = "sellcurrencylotISOCode")
    LotDTO toDto(Lot lot);

    @Mapping(target = "materialLots", ignore = true)
    @Mapping(source = "buycurrencylotId", target = "buycurrencylot")
    @Mapping(source = "sellcurrencylotId", target = "sellcurrencylot")
    Lot toEntity(LotDTO lotDTO);

    default Lot fromId(Long id) {
        if (id == null) {
            return null;
        }
        Lot lot = new Lot();
        lot.setId(id);
        return lot;
    }
}
