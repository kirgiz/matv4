package material.kirgiz.app.service.mapper;

import material.kirgiz.app.domain.*;
import material.kirgiz.app.service.dto.CivilityDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Civility and its DTO CivilityDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CivilityMapper extends EntityMapper<CivilityDTO, Civility> {


    @Mapping(target = "thirdCivilities", ignore = true)
    Civility toEntity(CivilityDTO civilityDTO);

    default Civility fromId(Long id) {
        if (id == null) {
            return null;
        }
        Civility civility = new Civility();
        civility.setId(id);
        return civility;
    }
}
