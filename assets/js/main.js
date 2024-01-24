// ハンバーガーメニュー
$('.openbtn1').click(function () {
  console.log('echo click');
  $(this).toggleClass('active');
  $('nav.header-list').toggleClass('active'); // ulにもactiveクラスを追加・削除
});
