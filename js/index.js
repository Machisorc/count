$(document).ready(function() {
  //определяем объекты, с которыми будем работать
  let valueBlock = $('#total');
  let licensePlanTag = $('.license');
  let lisenceCountTag = $('select');

  //берем дефолтные значения
  let licensePrice = licensePlanTag.val();
  let licenseCount = lisenceCountTag.val();

  //устанавливаем дефолтную сумму
  let sum = licensePrice * licenseCount;
  updateValue(valueBlock, sum);

  licensePlanTag.on('change', function() {
    //обновляем переменную
    licensePrice = $(this).val();
    //пересчитываем
    sum = licensePrice * licenseCount;
    //обновляем отображение
    updateValue(valueBlock, sum);
    //обновляем отображение плана
    $('#plan').html(this.id);
  });

  lisenceCountTag.on('change', function() {
    //обновляем переменную
    licenseCount = $(this).val();
    //пересчитываем
    sum = licensePrice * licenseCount;
    //обновляем отображение
    updateValue(valueBlock, sum);
  });

  //функция расчета и вставки
  function updateValue(node, value) {
    node.html('$' + value + 'us');
    $('div.price-total').each(function() {
    $(this).html($(this).html().replace('us', '<span>us</span>'));    
  });
}
  $(".btn").click(function() {
    $(".form").submit();
  });
});