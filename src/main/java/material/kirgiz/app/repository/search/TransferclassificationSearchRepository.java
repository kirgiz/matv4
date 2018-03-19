package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Transferclassification;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Transferclassification entity.
 */
public interface TransferclassificationSearchRepository extends ElasticsearchRepository<Transferclassification, Long> {
}
