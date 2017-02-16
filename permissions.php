<?php include('header.php') ?>
<div id="about-thungo" class="center-content clearfix big-daddy about-wrapper">
    <div class="sidebar-menu" style="height: 807px;">
        <ul class="fixed-mn-left fixed">
            <li class="ac">
                <a href="#">Quản lý thành viên</a>
                <ul class="small">
                    <li><a href="http://192.168.2.68:8081/them-thanh-vien">Thêm mới</a></li>
                    <li class="ac"><a href="http://192.168.2.68:8081/quan-ly-thanh-vien">Danh sách</a></li>
                </ul>
            </li>
            <li class="ac">
                <a href="#">Quản lý loại gói hàng</a>
                <ul class="small">
                    <li><a href="http://192.168.2.68:8081/them-moi-loai-goi-hang">Thêm mới</a></li>
                    <li class="ac"><a href="http://192.168.2.68:8081/quan-ly-loai-goi-hang">Danh sách</a></li>
                </ul>
            </li>
            <li>
                <a href="http://192.168.2.68:8081/quan-ly-phan-quyen">Quản lý phân quyền</a>
            </li>
            <li>
                <a href="http://192.168.2.68:8081/lich-su-dang-nhap">Lịch sử đăng nhập</a>
            </li>
            <li>
                <a href="http://192.168.2.68:8081/lich-su-thao-tac">Lịch sử thao tác</a>
            </li>
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
                <div class="user-login">
        <span class="name-user">
            Khánh Trình            <ul class="sub-user">
                <li><a href="">Trang cá nhân</a></li>
                <li><a href="?logout">Thoát</a></li>
            </ul>
        </span>
                    <ul class="localization">
                        <li class="language-vi"><a class="active" href="?switch-language=vi">VN</a></li>
                        <li class="language-en"><a href="?switch-language=en_US">EN</a></li>
                    </ul>
                </div>
            </div>
            <p>Phân quyền hệ thống</p>

        </div>


        <div class="content-form">
            <form method="post" id="form" novalidate="">
                <div class="box-all-tbmt create-new-tm clearfix">
                    <div>
                        <div class="row-content">
                            <div class="text-name-tm h50">Manager <span class="red-text">*</span></div>
                            <table class="form-table" id="role" cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td>
                                        <input id="c1" type="checkbox" name="manager_role[]" value="view_bidding_list">
                                        &nbsp;
                                        <label for="c1"><span></span> view_bidding_list</label>
                                    </td>
                                    <td>
                                        <input id="c2" type="checkbox" name="manager_role[]" value="category_manager">
                                        &nbsp;
                                        <label for="c2"><span></span> category_manager</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="c3" type="checkbox" name="manager_role[]" value="view_bidding_list">
                                        &nbsp;
                                        <label for="c3"><span></span> view_bidding_list</label>
                                    </td>
                                    <td>
                                        <input id="c4" type="checkbox" name="manager_role[]" value="category_manager">
                                        &nbsp;
                                        <label for="c4"><span></span> category_manager</label>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="gr-btn-form clearfix" style="margin-top: 10px;">
                    <button class="btn-red" type="submit">Lưu</button>
                </div>
            </form>
        </div>
    </div>
</div>
<?php include('footer.php') ?>

