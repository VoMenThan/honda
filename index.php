<?php include('header.php') ?><div id="about-thungo" class="center-content clearfix big-daddy about-wrapper">    <?php include ('menu-left.php')?>    <div class="right-content clearfix moi-thau">        <?php include ('search-login.php')?>        <div class="title-name">            Tất cả thông báo mời chào hàng        </div>        <div class="box-all-tbmt">            <table class="all-tbmt">                <thead>                <tr class="head-table"><!--                    <th class="stt">STT</th>-->                    <th class="so-tbmt">Số TBMCH</th>                    <th class="so-lsd">Số lần sửa đổi</th>                    <th class="col-3 ten-goi-thau">Tên gói hàng</th>                    <th class="thoi-diem-tai">Thời điểm <br> đăng tải</th>                    <th class="thoi-gian-mo">Thời điểm <br>mở chào hàng</th>                </tr>                </thead>                <tbody>                <?php for ($i=1; $i<8; $i++){?>                <tr class="row-content"><!--                    <td class="col-1">--><?php //echo $i;?><!--</td>-->                    <td class="col-2 color-red">                        <div class="large_hidden tb-mb">Số TBMCH</div>                        <div class="text-box so-tbmt">                            123456789012345678901234567890                        </div>                    </td>                    <td class="col-3 text-center">                        <div class="large_hidden tb-mb">Số lần sửa đổi</div>                        <div class="text-box">                            1                        </div>                    </td>                    <td class="col-3">                        <div class="large_hidden tb-mb">Tên gói hàng</div>                        <div class="text-box">                            lorem ipsum dolor sit amet, consectetur adipisicing elit proident, sunt in culpa qui                        </div>                    </td>                    <td class="col-4">                        <div class="large_hidden tb-mb">Thời điểm đăng tải</div>                        <div class="text-box">                            06/01/2017 <br> 16:32                        </div>                    </td>                    <td class="col-5">                        <div class="large_hidden tb-mb">Thời điểm mở chào hàng</div>                        <div class="text-box">                            06/01/2017  <br>   16:32                        </div>                    </td>                </tr>                <?php }?>                </tbody>            </table>            <div class="pagination-wrp">                <ul class="pagination bootpag">                    <li data-lp="1" class="prev disabled"><a href="javascript:void(0);"><i class="fa fa-angle-left"></i></a>                    </li>                    <li data-lp="1" class="active"><a href="javascript:void(0);">1</a></li>                    <li data-lp="2"><a href="javascript:void(0);">2</a></li>                    <li data-lp="3"><a href="javascript:void(0);">3</a></li>                    <li data-lp="4"><a href="javascript:void(0);">4</a></li>                    <li data-lp="5"><a href="javascript:void(0);">5</a></li>                    <li data-lp="6" class="next"><a href="javascript:void(0);"><i class="fa fa-angle-right"></i></a>                    </li>                </ul>            </div>        </div>    </div></div><?php include('footer.php') ?>