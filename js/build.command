cd `dirname $0`

uglifyjs ../bootstrap/js/bootstrap.min.js ../js/spectrum/spectrum.min.js ../js/bootstrap-maxlength.min.js ../js/cropit/jquery.cropit.min.js ../js/qrcdr.js -o ../js/qrcdr.min.js