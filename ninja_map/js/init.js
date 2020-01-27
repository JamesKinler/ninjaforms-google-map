// Create a new object for custom validation of a custom field.
var myCustomFieldController = Marionette.Object.extend( {

	initialize: function() {

		// Listen to the render:view event for a field type. Example: Textbox field.
		this.listenTo( nfRadio.channel( 'form' ), 'render:view', this.renderView );
	},

	renderView: function( view ) {
		// Check if this is the right field. Example check for field key.
		if ( 'contact-map' != view.model.get( 'key' ) ) return false;
    // then its finding the class on the element
		var el = jQuery( view.el ).find( '.contact-form-map' );
    console.log('google maps form is loaded');
    // then appending the script to the body
        var body= document.getElementsByTagName('body')[0];
         var script= document.createElement('script');
         script.type= 'text/javascript';
         script.src= "https://maps.googleapis.com/maps/api/js?key=YOURAPIKEYHERE8&libraries=places&callback=initMap";
         document.body.appendChild(script);
	}
});

// On Document Ready...
jQuery( document ).ready( function( $ ) {
	// Instantiate our custom field's controller, defined above.
	new myCustomFieldController();
});
