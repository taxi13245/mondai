function check(){
var ar = henkan_form.henkan.value;
  ar = ar.replace(/場合/g,"時に");
  ar = ar.replace(/さん/g,"っち");
  ar = ar.replace(/君/g,"っち");
  ar = ar.replace(/くん/g,"っち");
  ar = ar.replace(/求めよ。/g,"計算してくれない？");
  ar = ar.replace(/いました。/g,"ったみたいなんだけど、");
  ar = ar.replace(/なさい。/g,"てくれない？おねがい！");
  ar = ar.replace(/ろ。/g,"てほしいな！");
  ar = ar.replace(/ください。/g,"てくれないかな？");
  ar = ar.replace(/せよ。/g,"して！おねがい！");
  ar = ar.replace(/しますか。/g,"なるのかなあ？");
  ar = ar.replace(/いますか。/g,"なるのかなあ？");
  ar = ar.replace(/位置/g,"トコ");
  ar = ar.replace(/km/g,"きろめーとる");
  ar = ar.replace(/cm/g,"せんちめーとる");
  ar = ar.replace(/すると/g,"したら");
  ar = ar.replace(/あります。/g,"あって、");
  ar = ar.replace(/でしょう。/g,"んですか？おしえて！");
  ar = ar.replace(/です。/g,"みたい。");
  ar = ar.replace(/ります。/g,"るみたい。");
  ar = ar.replace(/ですか。/g,"かおしえて！");
  ar = ar.replace(/兄/g,"にいに");
  ar = ar.replace(/姉/g,"ねえね");
  ar = ar.replace(/女子/g,"おんなのこ");
  ar = ar.replace(/男子/g,"おとこのこ");
  ar = ar.replace(/父/g,"ぱぱ");
  ar = ar.replace(/母/g,"まま");
  ar = ar.replace(/でした。/g,"みたい。");
  ar = ar.replace(/円/g,"えん");
  ar = ar.replace(/とき、/g,"ときに、");
  ar = ar.replace(/ある。/g,"あって、");
  var demo2 = document.getElementById("kakka");
  demo2.innerHTML = ar;
  var img = document.getElementById("img");
  img.innerHTML = "<img src='./1.png' class='gazou'>"
}
