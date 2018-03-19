package material.kirgiz.app.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class })
@AutoConfigureBefore(value = { WebConfigurer.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(material.kirgiz.app.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(material.kirgiz.app.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Company.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Country.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Country.class.getName() + ".addressCountries", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName() + ".companyBaseCurrencies", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName() + ".currencyRates", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName() + ".materialBuyCurrencies", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName() + ".materialSellCurrencies", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName() + ".lotBuyCurrencies", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Currency.class.getName() + ".lotSellCurrencies", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Forexrates.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Thirdclassification.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Thirdclassification.class.getName() + ".thirdCategories", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Third.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Third.class.getName() + ".materialhistoryfroms", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Third.class.getName() + ".materialhistorytos", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Third.class.getName() + ".addressthirds", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Addressclassification.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Addressclassification.class.getName() + ".addressCategories", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Address.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Address.class.getName() + ".thirdaddresses", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Civility.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Civility.class.getName() + ".thirdCivilities", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Transferclassification.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Transferclassification.class.getName() + ".materialhistoryCategories", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Materialclassification.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Materialclassification.class.getName() + ".materialCategories", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Lot.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Lot.class.getName() + ".materialLots", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Material.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Materialhistory.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Materialhistory.class.getName() + ".itemTransfereds", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Materialclassification.class.getName() + ".materialCats", jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Dashboard.class.getName(), jcacheConfiguration);
            cm.createCache(material.kirgiz.app.domain.Materialclassification.class.getName() + ".materialCategs", jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
