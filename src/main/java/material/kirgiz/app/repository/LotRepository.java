package material.kirgiz.app.repository;

import material.kirgiz.app.domain.Lot;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Lot entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LotRepository extends JpaRepository<Lot, Long> {

}
