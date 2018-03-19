package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Civility;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Civility entity.
 */
public interface CivilitySearchRepository extends ElasticsearchRepository<Civility, Long> {
}
