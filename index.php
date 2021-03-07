<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

	<title></title>
	<meta name="description" content="@yield('description')" />
	<meta name="keywords" content="株式会社ファインクオリティ、マンション管理会社　大阪、マンション管理会社　見直し、マンション管理　オーナー、固定費" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

	<!-- Styles -->
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<link href="css/app.css" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style.min.css">
	<link rel="apple-touch-icon" type="image/png" href="images/favicons/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="images/favicons/icon-192x192.png">
	<!-- BootstrapのCSS読み込み -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- jQuery読み込み -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- BootstrapのJS読み込み -->
    <script src="js/bootstrap.min.js"></script>
</head>
<body>
  	<header class="header">
		<div class="header-fixed-menu shadow-sm d-flex justify-content-between align-items-stretch bg-white position-fixed w-100">
			<h1 class="m-3 h6 logo">
				<a href="" class="text-decoration-none text-primary">
					<img src="images/fq_logo.png" alt="ファインクオリティロゴ" width="50"><span class="p-1 font-weight-bold font-serif"><img src="images/fq_logo_text@2x.png" alt="FINEQUALITY" width="150"></span>
				</a>
			</h1>
			<nav class="justify-content-center nav">
				<ul class="d-none d-md-flex justify-content-space-lg-around justify-content-between w-100 align-items-stretch list-unstyled my-0 h-100 font-weight-bold">
					<li class="h-100 d-flex align-items-center"><a href="https://fineq.ai/aboutus" class="p-3">私たちについて</a></li>
					<li class="h-100 d-flex align-items-center"><a href="{{ url('/description')}}" class="p-3">業務内容</a></li>
					<li class="h-100 d-flex align-items-center"><a href="{{ url('/howit')}}" class="p-3">ご契約の流れ</a></li>
					<li class="h-100 d-flex align-items-center"><a href="{{ url('/owner')}}" class="p-3">ファインクオリティのひとりごと</a></li>
					<li class="h-100 d-flex align-items-center"><a href="{{ url('/company')}}" class="p-3">会社案内</a></li>
					<li class="h-100 d-flex align-items-center"><a href="{{ url('/contact')}}" class="btn btn-primary border-0 d-flex align-items-center contact bg-grad-secondary px-2 px-sm-3 px-lg-5 h-100"><span class="d-block text-white"><i class="fa fa-envelope mr-1" aria-hidden="true"></i>お問合せ</span></a></li>
				</ul>
				<div class="d-md-none d-flex align-items-center navbar-light mr-3">
					<a href="#" class="btn btn-outline-secondary ml-auto" data-toggle="modal" data-target="#exampleModal01" aria-controls="exampleModal01" aria-expanded="false" aria-label="Modal navigation" role="button">
						<span class="navbar-toggler-icon"></span>
					</a>
				</div>
				<div class="modal fade" id="exampleModal01" tabindex="-1" role="dialog" aria-labelledby="exampleModal01Title" aria-hidden="true">
					<div class="modal-dialog dialog-left" role="document">
					  <div class="modal-content">
						<div class="modal-header">
						  <h5 class="modal-title" id="exampleModal01Title">MENU</h5>
						  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						  </button>
						</div>
						<div class="modal-body">
							<ul class="p-0 font-weight-bold list-unstyled">
								<li class="h-100 d-flex align-items-center"><a href="{{ url('/aboutus')}}" class="p-3">私たちについて</a></li>
								<li class="h-100 d-flex align-items-center"><a href="{{ url('/description')}}" class="p-3">業務内容</a></li>
								<li class="h-100 d-flex align-items-center"><a href="{{ url('/howit')}}" class="p-3">ご契約の流れ</a></li>
								<li class="h-100 d-flex align-items-center"><a href="{{ url('/owner')}}" class="p-3">ファインクオリティのひとりごと</a></li>
								<li class="h-100 d-flex align-items-center"><a href="{{ url('/company')}}" class="p-3">会社案内</a></li>
							</ul>
						</div>
						<div class="modal-footer">
							<a href="contact" class="btn btn-primary border-0 d-flex justify-content-center align-items-center contact bg-grad-secondary px-2 px-sm-3 px-lg-5 h-100 w-100"><span class="d-block text-white"><i class="fa fa-envelope" aria-hidden="true"></i>お問合せ</span></a>
						</div>
					  </div>
					</div>
				  </div>
			</nav>
			
		</div>
    	<div class="header-content mt-4 mb-7">
    		<div class="header-content-area ml-4 pt-8">
        		<h2>マンションオーナー様の新しい支え<br>
          			ファインクオリティは安心を提供します
        		</h2>
      		</div>
      		<div class="owner">
      			<div class="owner-box">
			        <h3 class="p-2">オーナー様へ</h3>
			        <h3 class="p-2 ml-4">入居者満足度の確保と経費削減</h3>
			        <div class="owner-content p-4 mx-auto w-75">
				        <div class="owner-content-child">
			    	    	<p class="">入居者様に快適な日常生活を送って頂くことで、入居率・入居の継続・入居者の質が確保できます。それは経費節	減となり、オーナー様の収益確保、資産価値の維持となります。</p>
		        		</div>
			        	<img  class="owner-content-child" src="images/img_owner.png" alt="">
		        	</div>
			    	
			    </div>
			</div>
		    <div class="button-a">
					<a href="" class="p-2"><div class="inner-a">私たちについて</div></a>
			</div>
    	</div>
    </header>
    <section class="building p-5">
       	<p>管理費は固定費ではありません  マンションオーナー様へ新しい提案
       		<br><br>マンションにかかる修繕費用はかかった費用のみ
  			<br><br>マンション経営に安心を</p>
  	</section>
  	<section class="service mt-3">
  		<div class="container">
		    <p class="font-ch">サービスのご案内</p>
		    <h2 class="font-ch">SERVICE</h2>
		    <div class="plans">
		    　	<div class="bg-image1">
		    	</div>
		    	<div class="row row-service">
					    <div class="col-md-5 col-12">
					    	<div class="strongs">
						    	<div class="text-area">
							    	<h3><span class="plans-letter1">3</span><span class="plans-letter2">つ</span>の強みで<br>
							        	安心をお約束します</h3>
							    </div>
						    </div>
					    </div>
					    <div class="col-md-7 col-12">
					    	<h3>ファインクオリティが</h3>
					    	<h3 class="ml-5">今までにない新しいプランをご提案</h3>
					    	<p>固定費の掛からないオーナー様の代行</p>
				      		<a href="">オーナーズプラン</a>
				      	</div>
			    </div>
		      	<div class="plan-content">
		      		<div class="row">
			        	<ul class="plan-ul">
			        		<li>
			        			<div class="li-number"><p>1</p>
			        			</div>
					        	<div class="li-text">
				          			<h4>ランニングフリー</h4>
				          			<p>費用はトラブル対応が
				            		発生した場合のみ
				            		無駄な経費はいりません</p>
				            	</div>
			    	    	</li>
			    	    	<li>
			        			<div class="li-number"><p>2</p>
			        			</div>
					        	<div class="li-text">
					          		<h4>マンション
					            	コンシェルジュ</h4>
					          		<p>オーナー様に代わって
					            	入居者様の対応をし
					            	随時報告させて頂きます</p>
					            </div>
					        </li>
					        <li>
			        			<div class="li-number"><p>3</p>
			        			</div>
					        	<div class="li-text">
						          <h4>プロフェッショナル</h4>
						          <p>配管設備を熟知した
						            責任あるスタッフが
						            信頼を安心を
						            お届けいたします</p>
		        				</div>
			        		</li>
			        	</ul>
			        </div>    
		      	</div>
	    	</div>
    	</div>
  	</section>
  	<section class="merit mt-3">
  		<div class="container">
  			<div class="row">
  				<div class="col-md-4 merit-right">
				    <p class="font-ch">導入メリット</p>
				    <h2 class="font-ch">MERIT</h2>
				</div>
			    <div class="col-md-8 merit-left">
			      <div class="merit1">
			      	<div class="merit-top-img1">
			      		<img src="images/img_bg-merit1.png">
			      	</div>
			        <div class="merit-top-img2">
			        	<div class="merit-top-text">
				          <p>オーナーズプランを導入頂いた</p>
				          <p>オーナー様のメリット</p>
				        </div>
			        </div>
			      </div>
			    </div>
			</div>
			<div class="row">   
		      <div class="merit-before">
		        <div class="">
		          <p></p>
		          <p>すぐに対応、安心の生活を</p>
		        </div>
		      </div>
		      <div class="merit-after">
		        <div class="merit-top3">
		          <p>管理会社様</p>
		          <p>新たなサービスの提案を図れます</p>
		        </div>
		      </div>
		    </div>
	    </div>
  	</section>
  	<section class="about mt-3">
	  	<div class="container">
		    <p class="font-ch">私たちについて</p>
		    <h2 class="font-ch">ABOUT</h2>
		    <div class="about-text">
		      <p>オーナー様と入居者様とを結ぶ絆<span>「ひとつのリング」でありたい。</span></p>
		      <p>ファインクオリティは信頼の絆を<span>結びつけるお手伝いをしたいと考えています。</span></p>
		    </div>
		    <a href="">私たちについて</a>
		</div>
	</section>
	<section class="alone">
	    <div class="alone-top">
	    	<p>ファインクオリティのひとりごと</p>
	    	<a href="">一覧へ</a>
	  	</div>
	  	<div class="alone-contents">
	    	<div class="alone-box">
	      		<p>有馬離宮でのひととき</p>
		      	<img src="" alt="">
		      	<p>このたび新しいホームページを立ち上げることが出来ました。 いろいろとアドバイスを頂いたお客様も…</p>
	    	</div>
  		</div>
  	</section>
  	<section class="contact">
	  	<div class="contact-top">  
	    	<h4>お見積もり・お問い合わせ</h4>
	  	</div>
	  	<div class="contact-bottom">
	    	<p>「概算の料金が知りたい」「サービスに関するご質問」など
	      	ぜひお気軽にお問い合わせください</p>
	    	<p><span></span>06-6335-7496</p>
	    	<div class="form">
	      		<a href="">お問い合わせフォームへ</a>
	      		<a href="">お問い合わせフォームへ</a>
	    	</div>
	  	</div>
	</section>
  	<footer>
	    <img src="" alt="">
	    <ul>
	      <li>TOP</li>
	      <li>私たちについて</li>
	      <li>業務内容</li>
	      <li>オーナーズプラン</li>
	      <li>ひとりごと</li>
	      <li>会社案内</li>
	    </ul>
	    <ul>
	      <li><img src="" alt="">Instagram</li>
	      <li><img src="" alt="">LINE</li>
	    </ul>
	    <p>プライバシーポリシー</p>
	    <p>©FINEQUALITY Inc. All Rights Reserved.</p>
	</footer>
</body>
</html>