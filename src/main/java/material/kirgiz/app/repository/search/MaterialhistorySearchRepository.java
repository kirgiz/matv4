package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Materialhistory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Materialhistory entity.
 */
public interface MaterialhistorySearchRepository extends ElasticsearchRepository<Materialhistory, Long> {
}
