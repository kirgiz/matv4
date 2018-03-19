package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Material;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Material entity.
 */
public interface MaterialSearchRepository extends ElasticsearchRepository<Material, Long> {
}
