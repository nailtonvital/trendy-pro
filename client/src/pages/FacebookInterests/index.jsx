import { Fragment } from "react";
import style from "./style.module.scss";


export default function FacebookInterests() {
 return (
    <Fragment>
    <div className={style.body}>
  	<div className={style.container}>
  		<div className={style.mainHeader}>
	  		<h1 className={style.title}>Facebook Interests</h1>
			<div className={style.input}>
				<input type="text" className={style.input }/>
				<span className={style.searchButton}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
			  			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
				</span>
			</div>
  		</div>
  		{/*
  		<div className={style.results}>
  			<div className={style.resultsHead}>
  				<h5 style="padding-left: 10px;">Results</h5>
                 <div className={style.resultsButton}>
  					<button type="button" class="btn btn-dark">Open on Editor</button>
  					<button type="button" class="btn btn-dark">Export <i class='bx bx-export'></i></button>
  					<button type="button" class="btn btn-dark">Copy All <i class='bx bx-copy'></i></button>
  				</div> */}
  				
  			{/* </div> */}
  			
  			{/* <ul class="list-group">
			  <li class="list-group-item">An item</li>
			  <li class="list-group-item">A second item</li>
			  <li class="list-group-item">A third item</li>
			  <li class="list-group-item">A fourth item</li>
			  <li class="list-group-item">And a fifth one</li>
			</ul> 
            
  		</div>
        */}
  	</div>
    
		


    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script> */}
  </div>
    </Fragment>
 )
}