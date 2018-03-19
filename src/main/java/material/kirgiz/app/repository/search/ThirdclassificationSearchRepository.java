package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Thirdclassification;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Thirdclassification entity.
 */
public interface ThirdclassificationSearchRepository extends ElasticsearchRepository<Thirdclassification, Long> {
}
