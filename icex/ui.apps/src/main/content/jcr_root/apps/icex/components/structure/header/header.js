use(function () {

	var pages = [];
	
	var websiteRoot 	= currentPage.getAbsoluteParent(1);
	var languageRoot 	= currentPage.getAbsoluteParent(2);
	var children 		= languageRoot.listChildren();
	
	while(children.hasNext()) {
		var child = children.next();
		var selected = currentPage.getPath().startsWith(child.getPath());
		
		pages.push({
			page: child,
			selected: selected
		});
	}
	
	return {
		pages: 			pages,
		languageRoot: 	languageRoot,
		websiteTitle: 	"ICEX"
	}
});
