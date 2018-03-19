package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Forexrates;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Forexrates entity.
 */
public interface ForexratesSearchRepository extends ElasticsearchRepository<Forexrates, Long> {
}
