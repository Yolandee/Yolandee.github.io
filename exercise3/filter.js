function filterCategory(filterSelection,filterBy){//filter usage control author
	
		let itemsTOFilter=Array.from(document.getElementsByClassName("RecipeCardWrapper"));
		console.log(itemsTOFilter);
		for(let listItem of itemsTOFilter){
			console.log(listItem);
			if(listItem.dataset[filterSelection]===filterBy){
				listItem.style.display="flex";
			}else{
				listItem.style.display="none";
			}
		
		}
	}
function FilterCWrapper(filter,filtersBy){//filter usage control update date
	
		let item=Array.from(document.getElementsByClassName("RecipeCardWrapper"));
		console.log(item);
		for(let list of item){
			console.log(list);
			if(list.dataset[filter]===filtersBy){
				list.style.display="flex";
			}else{
				list.style.display="none";
			}
		
		}
	}
function filterUpdated(filter,filtersBy){//filter usage control type
	
		let item=Array.from(document.getElementsByClassName("RecipeCardWrapper"));
		console.log(item);
		for(let list of item){
			console.log(list);
			if(list.dataset[filter]===filtersBy){
				list.style.display="flex";
			}else{
				list.style.display="none";
			}
		
		}
	}
	
