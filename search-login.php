<select class="link-direct" name="" id="">
    <option value="">Tất cả thông báo mời thầu</option>
    <option value="">Hàng có sẵn trên thị trường</option>
    <option value="">Hàng phải thiết kế</option>
    <option value="">Hỗn hợp</option>
</select>


<div class="box-search-login clearfix">
    <div class="box-login">
        <div class="user-login">
<!--            <img src="assets/images/icon/login-user.png" alt="">-->
            <span class="name-user click-login">Đăng nhập</span>
        </div>
        <div class="pupup-login popup-fade-in-out">
            <div class="btn-lose"><img src="assets/images/icon/btn-close.png" alt=""></div>
            <div class="username row-pup">
                <div class="text-login">Tên tài khoản</div>
                <input class="input-login" type="text" placeholder="Tên tài khoản">
            </div>
            <div class="password row-pup">
                <div class="text-login">Mật khẩu</div>
                <input class="input-login" type="password" placeholder="Mật khẩu">
            </div>
            <div class="btn-login row-pup clearfix">
                <a class="btn-red btn-dn" href="../honda/tat-ca-tbmt.php">Đăng nhập</a>
                <div class="qmk clearfix"><a class="link-qmk" href="#">Quên mật khẩu</a></div>
            </div>
        </div>

        <div class="pupup-quen-mat-khau popup-fade-in-out">
            <div class="btn-lose"><img src="assets/images/icon/btn-close.png" alt=""></div>
            <div class="username row-pup">
                <div class="text-login">Địa chỉ email</div>
                <input class="input-login" type="email" placeholder="Nhập địa chỉ email">
            </div>
            <div class="btn-login row-pup clearfix">
                <a class="btn-red" href="../honda/tat-ca-tbmt.php">Gửi mật khẩu</a>
            </div>
        </div>

    </div>

    <div class="box-search">
        <input class="input-search" type="text" placeholder="Nhập từ khoá">
        <span class="advanced-search-text">Tìm kiếm nâng cao</span>
        <span class="advanced-search"><i class="fa fa-search fa-2x" aria-hidden="true"></i></span>
        <div class="pupup-search-advance popup-fade-in-out clearfix">
            <div class="keyword-search w100 clearfix">
                <div class="key-text-search text-search lh40">Từ khoá</div>
                <div class="content-search"><input class="input-key" placeholder="Nhập từ khoá" type="text" class="input-key-search"></div>
            </div>
            <div class="time-search w100 clearfix">
                <div class="time-text-search text-search">Thời gian</div>
                <div class="list-choose content-search content-search-mb">
                    <div class="w30">
                        <input class="radio-choose" checked type="radio" id="ndtai" name="time" value="ndt">
                        <label for="ndtai">Ngày đăng tải</label>
                    </div>
                    <div class="w30">
                        <input class="radio-choose" type="radio" id="ndthau" name="time" value="ndt">
                        <label for="ndthau">Ngày đóng thầu</label>
                    </div>
                    <div class="w30">
                        <input class="radio-choose" type="radio" id="nph" name="time" value="nph">
                        <label for="nph">Ngày phát hành HSMT</label>
                    </div>
                </div>

            </div>
            <div class="date-search w100 clearfix">
                <div class="w210">
                    <div class="w70">đến ngày</div><input  placeholder="Chọn ngày" class="input-date date-picker" type="text" id="datepicker-4">
                    <i class="date-pic fa fa-calendar fa-2x" aria-hidden="true"></i>
                </div>
                <div class="w210">
                    <div class="w70">từ ngày</div> <input  placeholder="Chọn ngày" class="input-date date-picker" type="text" id="datepicker-3">
                    <i class="date-pic fa fa-calendar fa-2x" aria-hidden="true"></i>
                </div>
            </div>
            <div class="box-btn-search w100 clearfix">
                <div class="btn-search">Tìm kiếm &gt;</div>
            </div>
        </div>

    </div>

</div>