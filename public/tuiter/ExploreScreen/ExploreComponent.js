import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
<!--            <div class="row">-->
             <div class="wrap-search wd-spacing ">
                <div class="input-group input-group-rounded">
                    <span class="input-group-text" id="basic-addon1"><i class="wd-glass-color-JS-version fa fa-search"></i></span>
                    <input class="form-control input-group-field " type="text" placeholder="Search Twitter">
                </div>
                <div>
                    <a href="explore-settings.html"><i class=" fa fa-cog fa-2x"></i></a>
                </div>
            </div>
<!--                        search field and cog -->
<!--           </div>-->
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item wd-nav-active wd-blue-nav-tab-borders">
                    <a class="nav-link active " href="for-you.html"><span class="wd-white-words-normal">For you</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html"><span class="wd-white-words-normal">Trending</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html"><span class="wd-white-words-normal">News</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html"><span class="wd-white-words-normal">Sports</span></a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link " tabindex="-1" href="entertainment.html"><span class="wd-white-words-normal">Entertainment</span></a>
                </li>
           </ul>
           <!-- tabs -->
           <div class="position-relative wd-container ">
                <img class="wd-post-main-image" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
                <div class="position-absolute wd-bottom-left">SpaceX's Starship</div>
            </div>

           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
