package material.kirgiz.app.repository;

import material.kirgiz.app.domain.Material;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Material entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MaterialRepository extends JpaRepository<Material, Long> {

}
