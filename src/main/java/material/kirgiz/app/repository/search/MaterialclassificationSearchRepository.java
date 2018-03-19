package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Materialclassification;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Materialclassification entity.
 */
public interface MaterialclassificationSearchRepository extends ElasticsearchRepository<Materialclassification, Long> {
}
