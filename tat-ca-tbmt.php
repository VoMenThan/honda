<?php include('header.php') ?><div id="about-thungo" class="center-content clearfix big-daddy about-wrapper">    <div class="sidebar-menu">        <ul class="fixed-mn-left fixed">            <li class="ac"><a href="">Tất cả thông báo mời thầu</a></li>            <li class=""><a href="">Hàng có sẵn trên thị trường</a></li>            <li class=""><a href="">Hàng phải thiết kế</a></li>            <li class=""><a href="">Hỗn hợp</a></li>        </ul>    </div>    <div class="right-content clearfix moi-thau">        <?php include ('search-login-ed.php')?>        <div class="title-name">            <p>Tất cả thông báo mời thầu</p>            <div class="add-new"><a href="../honda/tao-moi-admin.php">Tạo mới +</a></div>        </div>        <div class="box-all-tbmt">            <table class="all-tbmt">                <thead>                <tr class="head-table">                    <th class="stt">STT</th>                    <th class="so-tbmt">Số TBMCH</th>                    <th class="ten-goi-thau col-3">Tên gói thầu</th>                    <th class="thoi-diem-tai">Thời điểm đăng tải</th>                    <th class="thoi-gian-mo" >Thời điểm mở chào hàng</th>                    <th  class="table-edit"></th>                </tr>                </thead>                <tbody>                <?php for ($i=1; $i<4; $i++){?>                    <tr class="row-content">                        <td class="col-1"><?php echo $i;?></td>                        <td class="col-2 color-red">                            <div class="large_hidden tb-mb">Số TBMCH</div>                            <div class="text-box">                                2017010256-00                            </div>                            <div class="btn-mb-admin">                                <a href="#" class=""><i class="fa fa-pencil" aria-hidden="true"></i></a>                            </div>                        </td>                        <td class="col-3">                            <div class="large_hidden tb-mb">Tên gói thầu</div>                            <div class="text-box">                                lorem ipsum dolor sit amet, consectetur adipisicing elit proident, sunt in culpa qui                            </div>                        </td>                        <td class="col-4">                            <div class="large_hidden tb-mb">Thời điểm đăng tải</div>                            <div class="text-box">                                06/01/2017     16:32                            </div>                        </td>                        <td class="col-5">                            <div class="large_hidden tb-mb">Thời điểm mở chào hàng</div>                            <div class="text-box">                                06/01/2017     16:32                            </div>                        </td>                        <td class="btn-admin"><a href="#" class=""><i class="fa fa-pencil" aria-hidden="true"></i></a></td>                    </tr>                    <tr class="row-content">                        <td class="col-1"><?php echo $i;?></td>                        <td class="col-2 color-red">                            <div class="large_hidden tb-mb">Số TBMCH</div>                            <div class="text-box">                                2017010256-00                            </div>                            <div class="btn-mb-admin">                                <a href="#" class="btn-edit"><i class="fa fa-lock" aria-hidden="true"></i></a>                            </div>                        </td>                        <td class="col-3">                            <div class="large_hidden tb-mb">Tên gói thầu</div>                            <div class="text-box">                                lorem ipsum dolor sit amet, consectetur adipisicing elit proident, sunt in culpa qui                            </div>                        </td>                        <td class="col-4">                            <div class="large_hidden tb-mb">Thời điểm đăng tải</div>                            <div class="text-box">                                06/01/2017     16:32                            </div>                        </td>                        <td class="col-5">                            <div class="large_hidden tb-mb">Thời điểm mở chào hàng</div>                            <div class="text-box">                                06/01/2017     16:32                            </div>                        </td>                        <td class="btn-admin"><a href="#" class="btn-edit"><i class="fa fa-lock" aria-hidden="true"></i></a></td>                    </tr>                <?php }?>                </tbody>            </table>            <div class="pagination-wrp"><ul class="pagination bootpag"><li data-lp="1" class="prev disabled"><a href="javascript:void(0);"><i class="fa fa-angle-left"></i></a></li><li data-lp="1" class="active"><a href="javascript:void(0);">1</a></li><li data-lp="2"><a href="javascript:void(0);">2</a></li><li data-lp="3"><a href="javascript:void(0);">3</a></li><li data-lp="4"><a href="javascript:void(0);">4</a></li><li data-lp="5"><a href="javascript:void(0);">5</a></li><li data-lp="6" class="next"><a href="javascript:void(0);"><i class="fa fa-angle-right"></i></a></li></ul></div>        </div>    </div></div><div class="backgroud-popup">    <div class="request-popup">        <h2>Gửi yêu cầu mở khoá đến quản trị</h2>        <img src="assets/images/icon/btn-close.png" class="close-popup-request" alt="">        <div class="ten-tai-khoan lh30">            <span class="text-popup">Tên tài khoản</span>            <span class="content-popup">admin_01</span>        </div>        <div class="goi-thau-can-mo lh30">            <span class="text-popup">Gói thầu cần mở</span>            <span class="content-popup">2017010256-00</span>        </div>        <div class="ly-do lh30">            <span class="text-popup">Lý do</span>            <textarea name="content" id="" cols="45" rows="6"></textarea>        </div>        <div class="box-submit lh30">            <div class="btn-submit">Gửi yêu cầu</div>        </div>    </div></div><?php include('footer.php') ?>