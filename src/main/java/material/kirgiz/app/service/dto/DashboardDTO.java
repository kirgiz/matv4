package material.kirgiz.app.service.dto;


import java.time.LocalDate;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Dashboard entity.
 */
public class DashboardDTO implements Serializable {

    private Long id;

    @NotNull
    private LocalDate transferDate;

    private Double profitAndLoss;

    private Long numberOfItems;

    private Long warehouseOutgId;

    private String warehouseOutgName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getTransferDate() {
        return transferDate;
    }

    public void setTransferDate(LocalDate transferDate) {
        this.transferDate = transferDate;
    }

    public Double getProfitAndLoss() {
        return profitAndLoss;
    }

    public void setProfitAndLoss(Double profitAndLoss) {
        this.profitAndLoss = profitAndLoss;
    }

    public Long getNumberOfItems() {
        return numberOfItems;
    }

    public void setNumberOfItems(Long numberOfItems) {
        this.numberOfItems = numberOfItems;
    }

    public Long getWarehouseOutgId() {
        return warehouseOutgId;
    }

    public void setWarehouseOutgId(Long thirdId) {
        this.warehouseOutgId = thirdId;
    }

    public String getWarehouseOutgName() {
        return warehouseOutgName;
    }

    public void setWarehouseOutgName(String thirdName) {
        this.warehouseOutgName = thirdName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        DashboardDTO dashboardDTO = (DashboardDTO) o;
        if(dashboardDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), dashboardDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DashboardDTO{" +
            "id=" + getId() +
            ", transferDate='" + getTransferDate() + "'" +
            ", profitAndLoss=" + getProfitAndLoss() +
            ", numberOfItems=" + getNumberOfItems() +
            "}";
    }
}
