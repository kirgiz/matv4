package material.kirgiz.app.service.mapper;

import material.kirgiz.app.domain.*;
import material.kirgiz.app.service.dto.DashboardDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Dashboard and its DTO DashboardDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DashboardMapper extends EntityMapper<DashboardDTO, Dashboard> {



    default Dashboard fromId(Long id) {
        if (id == null) {
            return null;
        }
        Dashboard dashboard = new Dashboard();
        dashboard.setId(id);
        return dashboard;
    }
}
