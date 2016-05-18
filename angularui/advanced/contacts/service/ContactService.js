(function() {
	angular.module('angularApp').factory('contactService', contactService);
	
	
	function contactService() {
		var contactData = {};
		
		function add(contact) {
			contactData[contact.id] = contact;
		}
		
		function getById(id) {
			return contactData[id];
		}
		
		function getAll() {
		    return contactData;	
		}
		
		return {
			addContact: add,
			getContactById: getById,
			getAllContacts: getAll
		}
	}
	
})(window.angular);
