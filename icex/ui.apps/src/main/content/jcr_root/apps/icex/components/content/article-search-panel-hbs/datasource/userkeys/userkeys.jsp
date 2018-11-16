
<%@include file="/libs/granite/ui/global.jsp"%>

<%@ page import="com.adobe.granite.ui.components.ds.DataSource" %>
<%@ page import="com.adobe.granite.ui.components.ds.ValueMapResource" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="java.lang.Iterable" %>
<%@ page import="org.apache.sling.api.wrappers.ValueMapDecorator" %>
<%@ page import="com.adobe.granite.ui.components.ds.SimpleDataSource" %>
<%@ page import="org.apache.commons.collections.iterators.TransformIterator" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.LinkedHashMap" %>
<%@ page import="org.apache.commons.collections.Transformer" %>
<%@ page import="org.apache.sling.api.resource.*" %>
<%@ page import="com.adobe.granite.security.user.*" %>

<%
    final ResourceResolver resolver = resourceResolver;

    final Map<String, String> userKeys = new LinkedHashMap<String, String>();

    Resource r = resourceResolver.getResource("/etc/commerce/collections/");
    Iterable<Resource> it = r.getChildren();
    for(Resource p:it) {
        if(!p.getName().contains(":")){
        userKeys.put( p.getPath(),p.getName());
        }
    }


    DataSource ds = new SimpleDataSource(new TransformIterator(userKeys.keySet().iterator(), new Transformer() {
        public Object transform(Object o) {
            String userKey = (String) o;
            ValueMap vm = new ValueMapDecorator(new HashMap<String, Object>());

            vm.put("value", userKey);
            vm.put("text", userKeys.get(userKey));

            return new ValueMapResource(resolver, new ResourceMetadata(), "nt:unstructured", vm);
        }
    }));
 
    request.setAttribute(DataSource.class.getName(), ds);
%>