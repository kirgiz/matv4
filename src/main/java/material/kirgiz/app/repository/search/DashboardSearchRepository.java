package material.kirgiz.app.repository.search;

import material.kirgiz.app.domain.Dashboard;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Dashboard entity.
 */
public interface DashboardSearchRepository extends ElasticsearchRepository<Dashboard, Long> {
}
