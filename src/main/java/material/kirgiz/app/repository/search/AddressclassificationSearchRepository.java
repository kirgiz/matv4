package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Addressclassification;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Addressclassification entity.
 */
public interface AddressclassificationSearchRepository extends ElasticsearchRepository<Addressclassification, Long> {
}
