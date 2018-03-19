package material.kirgiz.app.repository;

import material.kirgiz.app.domain.Addressclassification;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Addressclassification entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AddressclassificationRepository extends JpaRepository<Addressclassification, Long> {

}
