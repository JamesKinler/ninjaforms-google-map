

var nfMap_input = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfMap_input',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = document.getElementById('map-input').value;
    // console.log(document.getElementById('map-input').value);
    return fieldData;

  }

});

new nfMap_input();

var nfMap_lat_input = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfMap_lat_input',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = lat;
    // console.log(lat);
    return fieldData;

  }

});

new nfMap_lat_input();

var nfMap_lng_input = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfMap_lng_input',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = lng;
    // console.log(lng);
    return fieldData;

  }

});

new nfMap_lng_input();
