<?php include('header.php') ?>
<div id="about-thungo" class="center-content clearfix big-daddy about-wrapper">
    <div class="sidebar-menu">
        <ul class="fixed-mn-left fixed">
            <li class="ac">
                <a href="">Quản lý User</a>
                <ul class="small">
                    <li class="ac"><a href="#nav-honda-vn">Danh sách User</a></li>
                    <li><a href="#nav-honda-xm">Thêm mới User</a></li>
                    <li><a href="quanlygoihang.php">Quản lý danh mục</a></li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="right-content clearfix moi-thau">

        <select class="link-direct" name="" id="">
            <option value="">Danh sách User</option>
            <option value="">Thêm mới user</option>
            <option value="">Quản lý danh mục</option>
        </select>

        <div class="title-name">
            <div class="pagination-wrp cac-phien-ban clearfix">
                <div class="user-login">
                    <img src="assets/images/icon/login-user.png" alt="">
                    <span class="name-user">
                        Manager User
                        <ul class="sub-user">
                            <li><a href="">Trang cá nhân</a></li>
                            <li><a href="">Thoát</a></li>
                        </ul>
                    </span>
                    <ul class="localization">
                        <li class="language-vi"><a class="active" href="#">VN</a></li>
                        <li class="language-en"><a href="#">EN</a></li>
                    </ul>
                </div>
            </div>

            <p>Tạo gói hàng mới</p>

        </div>

        <div class="content-form">
            <div class="box-all-tbmt create-new-tm clearfix">
                <div class="">
                    <div class="row-content">
                        <div class="text-name-tm h50">Loại gói hàng</div>
                        <div class="input-name-tm h50">
                            <select>
                                <option value="Lorem Ipsum">Lorem Ipsum 1</option>
                                <option value="Lorem Ipsum">Lorem Ipsum 2</option>
                            </select>
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Số hiệu gói hàng</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>

                    <div class="row-content">
                        <div class="text-name-tm h50">Mật khẩu</div>
                        <div class="input-name-tm h50 add-btn-ip">
                            <input type="text">
                            <button type="button" id="generate" class="btn-red">Tạo mới mật khẩu</button>
                        </div>
                    </div>

                    <div class="row-content">
                        <div class="text-name-tm h50">Tên gói hàng</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Tên dự án/đề tài</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Loại hợp đồng</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Hình thức mua hàng</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Thời gian phát hành hồ sơ mời</div>
                        <div class="input-name-tm h50">
                            <input id="datepicker-1" class="date-picker" type="text" placeholder="Chọn ngày">
                            <i class="date-pic fa fa-calendar fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Địa điểm phát hành hồ sơ mời</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Địa điểm phát hành hồ sơ mời</div>
                        <div class="input-name-tm h50">
                            <input type="text" id="datepicker-2" class="date-picker" placeholder="Chọn ngày">
                            <i class="date-pic fa fa-calendar fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="row-content">
                        <div class="text-name-tm h50">Địa điểm mở gói hàng</div>
                        <div class="input-name-tm h50">
                            <input type="text">
                        </div>
                    </div>
                    <div class="gr-btn-form clearfix">
                        <div class="error-ms">** Chưa điền thông tin!!!!</div>
                        <a class="btn-red" href="../honda/xem-truoc-admin.php">Save</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<?php include('footer.php') ?>

