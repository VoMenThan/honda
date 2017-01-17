(function($){
    $.fn.ajaxUpload = function(options) {

        if (typeof options.urlPost == typeof undefined || options.urlPost == false) {
            alert('urlPost is undefined');
            return false;
        }

        if (typeof options.obj_msg == typeof undefined || options.obj_msg == false) {
            alert('Bạn chưa định nghĩa object thông báo trạng thái upload');
            return false;
        }

        var settings = $.extend({
            'exts':'png|gif|jpeg|jpg',
            'max_file':3,
            'msg_overflow_max_file': 'Bạn chỉ được chọn tối đa ' + options.max_file + ' hình ảnh'
        }, options);

        settings.max_file = (settings.max_file < 0) ? 1 : settings.max_file;

        $(this).change(function(event) {
            $('.img_bdt .filename').html('Upload tối đa 3 hình ảnh');

            event.stopPropagation();
            event.preventDefault();

            var files = event.target.files;
            
            //Giới hạn số file upload
            if(files.length > settings.max_file){
                settings.obj_msg.html(settings.msg_overflow_max_file);
                return false;
            }

            var data = new FormData();
            $.each(files, function(key, value){
                data.append(key, value);
            });

            //CRSF
            data.append('token', settings.token);

            data.append('exts', settings.exts);

            if (typeof Page.show_loading != "undefined") { 
                Page.show_loading(true);
            }

            $.ajax({
                url: settings.urlPost,
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function(dt, textStatus, jqXHR){
                    if(dt.status == 200){
                        settings.obj_msg.html('');
                        settings.obj_image_name.val(dt.file_name);

                        //Nếu upload 1 file
                        if (settings.max_file == 1 && typeof settings.obj_image_path != "undefined" && typeof dt.file_path != "undefined") { 
                            settings.obj_image_path.attr('src', dt.file_path);
                        }
                        
                        $('.img_bdt .filename').html('Upload thành công');
                    }else{
                        $('.img_bdt .filename').html('Upload tối đa 3 hình ảnh');
                        settings.obj_msg.html(dt.msg);
                    }

                    if (typeof Page.show_loading != "undefined") { 
                        Page.show_loading(false);
                    }

                },
                error: function(jqXHR, textStatus, errorThrown){}
            });
        });

    }

    ////////////////////////////////////////////////////Form validate///////////////////////////////////////////////////////////
    $.fn.validate = function(options){
        var opts = $.extend({
            'name':'',
            'type':'username',
            'min_length':5,
            'max_length':500,
            'password':'',
            'dob':'',
            'valid_length':true
        }, options);

        var rules,
            obj_this = $(this),
            val = $.trim(obj_this.val());

        if(opts.type == 'username' || opts.type == 'fullname'){
            if(opts.type == 'username'){
                //val = val.toLowerCase();
                //val = obj_this.remove_unicode(); 
            }
            rules = ['required', 'max_length' , 'min_length', 'non_special_chars'];
        }else if(opts.type == 'phone'){
            opts.min_length = 10;
            opts.max_length = 11;
            rules = ['required', 'max_length' , 'min_length', 'number_phone'];
        }else if(opts.type == 're_password'){
            rules = ['required', 'max_length' , 'min_length', 're_password'];
        }else if(opts.type == 'dob'){
            rules = ['dob'];
        }else if(opts.type == 'number_positive'){
            rules = ['required', 'number_positive'];
        }else if(opts.type == 'email'){
            rules = ['required', 'email'];
        }else if(opts.type == 'checkbox'){
            rules = ['checkbox'];
        }else{
            if(opts.valid_length == false){
                rules = ['required'];
            }else{
                rules = ['required', 'max_length', 'min_length'];    
            }
        }

        obj_this.val(val);

        for(var i = 0; i< rules.length; i++){
             //Check required
            if(rules[i] == 'required'){
                if(val == ''){
                    opts.obj_msg.html('Bạn vui lòng nhập '+$.trim(opts.name).toLowerCase()+' vào nhé');
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Min length
            if(rules[i] == 'min_length'){
                if(val.length < opts.min_length){
                    opts.obj_msg.html($.trim(opts.name) + ' phải có ít nhất ' + opts.min_length + ' ký tự');
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Max length
            if(rules[i] == 'max_length'){
                if(val.length > opts.max_length){
                    opts.obj_msg.html("Số ký tự " + $.trim(opts.name) + ' không được vượt quá: ' + opts.max_length);
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Không được nhập ký tự đặc biệt
            if(rules[i] == 'non_special_chars'){
                if(opts.type == 'fullname'){
                    var pattern = /^([a-zA-Z]| |-|_|â|ấ|ầ|ẩ|ẫ|ậ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|á|à|ả|ã|ạ|Á|À|Ả|Ã|Ạ|ă|ắ|ằ|ẳ|ẵ|ặ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|ê|ế|ề|ể|ễ|ệ|Ê|Ế|Ề|Ể|Ễ|Ệ|é|è|ẻ|ẽ|ẹ|É|È|Ẻ|Ẽ|Ẹ|í|ì|ỉ|ĩ|ị|Í|Ì|Ỉ|Ĩ|Ị|ô|ố|ồ|ổ|ỗ|ộ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|ơ|ớ|ờ|ở|ỡ|ợ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|ư|ứ|ừ|ử|ữ|ự|Ư|Ứ|Ừ|Ử|Ữ|Ự|ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ|Đ|đ|ó|ò|ỏ|õ|ọ|Ó|Ò|Ỏ|Õ|Ọ|ú|ù|ủ|ũ|ụ|Ú|Ù|Ủ|Ũ|Ụ)+$/; 
                    var msg = $.trim(opts.name) + ' không được chứa chữ số, ký tự đặc biệt';
                }else if(opts.type == 'username'){
                    var pattern = /^([a-zA-Z]|[0-9]|-|_|â|ấ|ầ|ẩ|ẫ|ậ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|á|à|ả|ã|ạ|Á|À|Ả|Ã|Ạ|ă|ắ|ằ|ẳ|ẵ|ặ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|ê|ế|ề|ể|ễ|ệ|Ê|Ế|Ề|Ể|Ễ|Ệ|é|è|ẻ|ẽ|ẹ|É|È|Ẻ|Ẽ|Ẹ|í|ì|ỉ|ĩ|ị|Í|Ì|Ỉ|Ĩ|Ị|ô|ố|ồ|ổ|ỗ|ộ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|ơ|ớ|ờ|ở|ỡ|ợ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|ư|ứ|ừ|ử|ữ|ự|Ư|Ứ|Ừ|Ử|Ữ|Ự|ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ|Đ|đ|ó|ò|ỏ|õ|ọ|Ó|Ò|Ỏ|Õ|Ọ|ú|ù|ủ|ũ|ụ|Ú|Ù|Ủ|Ũ|Ụ)+$/;
                    var msg = $.trim(opts.name) + ' không được chứa ký tự đặc biệt';
                }
                
                if(!pattern.test(val)){
                    opts.obj_msg.html(msg);
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Check số điện thoại
            if(rules[i] == 'number_phone'){
               var filter = /^[0-9-+]+$/;
                if (!filter.test(val)) {
                    opts.obj_msg.html($.trim(opts.name) + ' không hợp lệ');
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Check xác nhận mật khẩu
            if(rules[i] == 're_password'){
                if(val != opts.password){
                    opts.obj_msg.html('Hai mật khẩu không khớp nhau');
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Check số dương
            if(rules[i] == 'number_positive'){
                val = parseInt(val);
                if(val <= 0){
                    opts.obj_msg.html($.trim(opts.name) + ' phải > 0');
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Check dob
            if(rules[i] == 'dob'){
                var arr = $(this).explode('-', opts.dob);
                var day = arr[0];
                var month = arr[1];
                var year = arr[2];

                if(month == 2){
                    if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
                        if(day > 29){
                            opts.obj_msg.html('Ngày sinh không được lớn hơn 29 trong năm nhuần');
                            return false;
                        }
                    }else if(day > 28){
                        opts.obj_msg.html('Ngày sinh không được lớn hơn 28');
                        return false;
                    }
                }else if(month == 4 || month == 11 || month == 6 || month == 9){
                    if(day > 30){
                        opts.obj_msg.html('Ngày sinh không được lớn hơn 30');
                        return false;
                    }
                }
            }

            //Check email
            if(rules[i] == 'email'){
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                
                var emailParts = val.toLowerCase().split('@');
                if (emailParts.length != 2) {
                    var valid_name_email = false;
                }else{
                    var valid_name_email = !(/[^\w\+\.\-]/.test(emailParts[0]));
                }
                
                if(pattern.test(val) == false || valid_name_email == false ){
                    opts.obj_msg.html('Email không hợp lệ');
                    setTimeout(function(){obj_this.focus()}, 1);
                    return false;
                }
            }

            //Checkbox
            if(rules[i] == 'checkbox'){
                var elname = obj_this.attr('name');
                var checkedCount = $("input[type=checkbox][name^='"+elname+"']:checked").length;

                if(checkedCount < opts.min_length){
                    opts.obj_msg.html('Bạn phải chọn ít nhất ' + opts.min_length + ' ' + $.trim(opts.name));
                    return false;
                }else if(checkedCount > opts.max_length){
                    opts.obj_msg.html('Bạn chỉ được chọn tối đa ' + opts.max_length + ' ' + $.trim(opts.name));
                    return false;
                }else{
                    $("input[type=checkbox][name^='"+elname+"']:checked").each(function(){
                        console.log($(this).val());
                    });
                }
            }
        }
        obj_this.parent().removeClass('error');

        return true;
    }

    //Remove unicode
    $.fn.remove_unicode = function(){
        str = $(this).val();
        str= str.toLowerCase();  
        str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");  
        str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");  
        str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");  
        str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");  
        str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");  
        str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");  
        str= str.replace(/đ/g,"d");  
        str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-"); 

        str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1- 
        str= str.replace(/^\-+|\-+$/g,"");
        return str;
    }

    $.fn.reset_selectbox = function(){
        var val = $(this).val();
        $(this).next().find('a.sbSelector').html(val);
    }

    $.fn.val_selectbox = function(){
        return $(this).next().find('a.sbSelector').html();
    }

    $.fn.explode = function(delimiter, string, limit) {
        if ( arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined' ) return null;
        if ( delimiter === '' || delimiter === false || delimiter === null) return false;
        if ( typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string === 'object'){
            return { 0: '' };
        }
        if ( delimiter === true ) delimiter = '1';
        delimiter += '';
        string += '';
        var s = string.split( delimiter );
        if ( typeof limit === 'undefined' ) return s;
        if ( limit === 0 ) limit = 1;
        if ( limit > 0 ){
            if ( limit >= s.length ) return s;
            return s.slice( 0, limit - 1 ).concat( [ s.slice( limit - 1 ).join( delimiter ) ] );
        }
        if ( -limit >= s.length ) return [];
        s.splice( s.length + limit );
        return s;
    }

}(jQuery));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validateInput(evt){
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    var keychar = String.fromCharCode(key);
    var keycheck = /[0-9]/;  
    if ( !(key == 8  ||  key == 27  || key == 46  || key == 39  || key == 37) ){
        if ( !keycheck.test(keychar) ){
            theEvent.returnValue = false;//for IE
            if (theEvent.preventDefault){ 
                theEvent.preventDefault();//Firefox
            }
        }   
    }  
}