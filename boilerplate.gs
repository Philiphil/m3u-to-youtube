/****** START BOILERPLATE CODE ******/

// <b>Note:</b> Apps Script automatically requests authorization
// based on the API's used in the code.

// Build an object from an object containing properties as key-value pairs
function createResource(properties) {
  var res = {};
  var normalizedProps = {};
  for (var p in properties) {
    var value = properties[p];
    if (p.substr(-2, 2) == '[]' && value) {
      var adjustedName = p.replace('[]', '');
      normalizedProps[adjustedName] = value.split(',');
    } else {
      normalizedProps[p] = value;
    }
  }
  for (var p in normalizedProps) {
    if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
      var propArray = p.split('.');
      var ref = res;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa == propArray.length - 1) {
          ref[key] = normalizedProps[p];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    };
  }
  return res;
}

// Remove parameters that don't have values before sending API request
function removeEmptyParams(params) {
  for (var p in params) {
    if (!params[p] || params[p] == 'undefined') {
      delete params[p];
    }
  }
  return params;
}

// Sample Apps Script code for printing API response data

function printResults(response) {

}
/***** END BOILERPLATE CODE *****/
