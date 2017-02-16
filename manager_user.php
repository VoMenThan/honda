<?php include('header.php') ?>
<div id="about-thungo" class="center-content clearfix big-daddy about-wrapper">
    <div class="sidebar-menu" style="height: 1067px;">
        <ul class="fixed-mn-left fixed">
            <li class="ac"><a href="#">Quản lý thành viên</a>
                <ul class="small">
                    <li><a href="http://192.168.2.68:8081/them-thanh-vien">Thêm mới</a></li>
                    <li class="ac"><a href="http://192.168.2.68:8081/quan-ly-thanh-vien">Danh sách</a></li>
                </ul>
            </li>
            <li class="ac"><a href="#">Quản lý loại gói hàng</a>
                <ul class="small">
                    <li><a href="http://192.168.2.68:8081/them-moi-loai-goi-hang">Thêm mới</a></li>
                    <li class="ac"><a href="http://192.168.2.68:8081/quan-ly-loai-goi-hang">Danh sách</a></li>
                </ul>
            </li>
            <li><a href="http://192.168.2.68:8081/quan-ly-phan-quyen">Quản lý phân quyền</a></li>
            <li><a href="http://192.168.2.68:8081/lich-su-dang-nhap">Lịch sử đăng nhập</a></li>
            <li><a href="http://192.168.2.68:8081/lich-su-thao-tac">Lịch sử thao tác</a></li>
        </ul>
    </div>
    <div class="right-content clearfix moi-thau">
        <select class="link-direct" name="" id="">
            <option value="">Danh sách User</option>
            <option value="">Thêm mới user</option>
            <option value="">Quản lý danh mục</option>
            <option value="">Hỗn hợp</option>
        </select>

        <div class="title-name">
            <div class="pagination-wrp cac-phien-ban clearfix">
                <div class="user-login"> <span class="name-user"> Khánh Trình <ul class="sub-user"> <li><a
                                        href="">Trang cá nhân</a></li> <li><a
                                        href="?logout">Thoát</a></li> </ul> </span>
                    <ul class="localization">
                        <li class="language-vi"><a class="active" href="?switch-language=vi">VN</a></li>
                        <li class="language-en"><a href="?switch-language=en_US">EN</a></li>
                    </ul>
                </div>
            </div>
            <p>Quản lý thành viên</p></div>
        <div class="action-box">
            <a class="add-new" href="http://192.168.2.68:8081/them-thanh-vien">Thêm mới</a>
        </div>
        <div class="box-all-tbmt">
            <table class="all-tbmt">
                <thead>
                <tr class="head-table center">
                    <th style="padding-left: 20px;">ID</th>
                    <th>Tên tài khoản</th>
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                <tr class="row-content">
                    <td class="col-2 color-red no-padding">
                        <div class="text-box">
                            <strong class="large_hidden">ID </strong>
                            19
                            <ul class="clearfix user-list-ctrl">
                                <li>
                                    <a class="user-history">
                                        <i class="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                    <ul class="sub-user-ctrl">
                                        <li><a href="">Action 1</a></li>
                                        <li><a href="">Action 2</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="http://192.168.2.68:8081/sua-thong-tin-thanh-vien?UsersID=19" class="">
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:lock('19');" class="">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td class="col-3 no-padding">
                        <div class="text-box"><a href="http://192.168.2.68:8081/thong-tin-thanh-vien?usersID=19">trinh.nck</a>
                        </div>
                    </td>
                    <td class="col-3 no-padding">
                        <div class="text-box"> Nguyễn Cảnh Khánh Trình</div>
                    </td>
                    <td class="col-4 no-padding">
                        <div class="text-box"> trinh.nck@gmail.com</div>
                    </td>
                    <td class="col-5 no-padding">
                        <div class="text-box"> 0123456789</div>
                    </td>
                    <td class="btn-admin"><input type="hidden" id="user_name_19" value="trinh.nck">
                        <input type="hidden" id="user_reason_19" value="">
                        <ul class="clearfix user-list-ctrl">
                            <li>
                                <a href="http://192.168.2.68:8081/lich-su-thanh-vien?UsersID=19" class="user-history">
                                    <i class="fa fa-history" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-user-ctrl">
                                    <li><a href="">Action 1</a></li>
                                    <li><a href="">Action 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="http://192.168.2.68:8081/sua-thong-tin-thanh-vien?UsersID=19" class="">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:lock('19');" class="">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>

                    </td>
                </tr>
                </tbody>
            </table>

            <div class="pagination-wrp">
                <ul class="pagination bootpag">
                    <li class="active"><a href="?page=1">1</a></li>
                    <li><a href="?page=2">2</a></li>
                    <li><a href="?page=2">&gt;</a></li>
                    <li><a href="?page=2">&gt;&gt;</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<?php include('footer.php') ?>

