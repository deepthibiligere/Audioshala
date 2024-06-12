<!DOCTYPE html>
<html>
    <head>
        <title>Audioshala</title>
        <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="stl/style1.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&display=swap" rel="stylesheet">
 
</head>
<body>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="index.php">Audioshala</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>

      <li class="nav-item dropdown">

        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">AUDIOBOOKS
          
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          <a class="dropdown-item" href="Leisurebooks.php">Leisure Books</a>
          <a class="dropdown-item" href="Conceptbooks.php">Concept Books</a>
      </li>

      <li class="nav-item dropdown">

        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RHYMES
          
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          <a class="dropdown-item" href="Rhymes.html">For 2-5 years</a>
          
      </li>
      <li class="nav-item dropdown">

        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACADEMICS
          
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          <a class="dropdown-item" href="syllabus.html">SYLLABUS</a>
          <a class="dropdown-item" href="learnconcepts.php">LEARN CONCEPTS</a>
      </li>

    
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>



<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/audiobooks.jpg" alt="Audio books" width="1100" height="500">
      <div class="carousel-caption">
        <h3 ><b>Audiobooks</b></h3>
        <p><b>Welcome to our Audiobooks Range!</b></p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="images/rhymes.jpg" alt="rhymes" width="1100" height="500">
      <div class="carousel-caption">
        <h3 style="color:#000000"><b>Rhymes </b></h3>
        <p style="color:#000000"><b>Kids love to learn from rhymes! </b></p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="images/Academics.jpg" alt="academics" width="1100" height="500">
      <div class="carousel-caption">
        <h3  ><b>Academics</b></h3>
        <p  ><b>Explore the range of curriculum by us!</b></p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

<section class="my-5"> 
    <div class="py-5">
        <h3 class="text-center">About Us</h3>
        </div>
 <div class="container-fluid"> 
    <div class="row">
        <div class= "col-lg-6 col-md-6 col-12">
            <img src="images/audioshala.png" class="img-fluid">
    </div>
    <div class= "col-lg-6 col-md-6 col-12">
        <h2>We are Audioshala</h2>
        <p class="py-3">
            Pupils watch numerous YouTube videos to simply comprehend a fundamental idea, and the majority of the time they become sidetracked. We are digital school library which will provide immediate access to a sizable online collection of books and videos along with their respective syllabuses, enabling users to comprehend concepts or finish their course material in one location.
        </p>
    </div>
</div>
</div>
</section>


<section class="my-5">
    <div class="py-5">
          <h2 class="text-center"> <b>Tell Us About Our Services!</b> </h2>
        <div class="w-50 m-auto">
            <form class="Userinfo.php" method="post" action="post">
                <div class="form-group">
                    <label><b>Username</b></label>
                  <input type="text" name="user"  autocomplete="off" class="form-control">
              </div>
              <div class="form-group">
                    <label><b>Email ID</b></label>
                  <input type="text" name="Email"  autocomplete="off" class="form-control">
              </div>
              <div class="form-group">
                    <label><b>Mobile No.</b></label>
                  <input type="text" name="mobile"  autocomplete="off" class="form-control">
              </div>
              <div class="form-group">
                    <label><b>Reviews</b></label>
                <textarea class="form-control" name="comments">
                    
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    </div>
</section>

<footer>
   <p class="py-3 bg-dark text-white text-center"> Contact us at-audioshala@gmail.com</p>
</footer>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
