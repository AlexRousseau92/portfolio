<section className={theme ? "container works light" : "container works dark"}>
<div className="works-card ">
    <div className='works-card-left'>
        <h1 className={theme ? 'works-card-title light' : 'works-card-title dark'}>Trouv'ton vélo</h1>
        <p className={theme ? 'works-card-description light' : 'works-card-description dark'}>
            Lorem ipsum, dolor sit amet  nam enim sed nemo reprehenderit unde laudantium incidunt aspernatur quis voluptates. !
        </p>
        <img className="works-card-img" src={img} alt="some bikes on the floor" />
        <div className={theme ? 'works-card-medias light' : 'works-card-medias dark'}>
            <i className="fab fa-github-square"></i>
            <i className="fas fa-globe"></i>
        </div>
    </div>
</div>
</section>