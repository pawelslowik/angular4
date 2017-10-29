package pl.com.psl.angular4.addressbook.util.search;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by psl on 29.10.17
 */
public class SearchParameters {

    private Integer page;
    private Integer pageSize;
    private Map<String, Object> entityParameters;

    public SearchParameters(Map<String, String> parameters){
        this.entityParameters = new HashMap<>(parameters.size());
        parameters.forEach((parameterName, parameterValue) -> {
            if("page".equals(parameterName)){
                this.page = Integer.parseInt(parameterValue);
            }
            else if("pageSize".equals(parameterName)){
                this.pageSize = Integer.parseInt(parameterValue);
            }
            else{
                this.entityParameters.put(parameterName, parameterValue);
            }
        });
    }

    public Integer getPage() {
        return page;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public Map<String, Object> getEntityParameters() {
        return entityParameters;
    }

    public boolean hasPaginationParameters(){
        return page != null && pageSize != null;
    }

    public boolean hasEntityParameters(){ return !entityParameters.isEmpty(); };

    @Override
    public String toString() {
        return "SearchParameters{" +
                "page=" + page +
                ", pageSize=" + pageSize +
                ", entityParameters=" + entityParameters +
                '}';
    }
}
