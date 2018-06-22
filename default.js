test file added by dev1

// this is comment added by dev2
function getuser(id){
	var x = this.service.get_user(id);
	return x;
}

function getproduct(id){
	var p = this.prod_service.get_product(id);
	return p;
}

function getdatetime(){
	return datetime();
}