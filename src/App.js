import './App.css';
import Rate from "./components/rate"
import Genre from "./components/genre";
import Name from "./components/moviename";
import Output from "./components/output";
import {useState} from "react";

function computeLPSArray(pat, M, lps)
{
    // length of the previous longest prefix suffix
    var len = 0;
    var i = 1;
    lps[0] = 0; // lps[0] is always 0

    // the loop calculates lps[i] for i = 1 to M-1
    while (i < M) {
        if (pat.charAt(i) == pat.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        }
        else // (pat[i] != pat[len])
        {
            // This is tricky. Consider the example.
            // AAACAAAA and i = 7. The idea is similar
            // to search step.
            if (len != 0) {
                len = lps[len - 1];

                // Also, note that we do not increment
                // i here
            }
            else // if (len == 0)
            {
                lps[i] = len;
                i++;
            }
        }
    }
}

/**
 * @param pat
 * @param txt
 * @returns {boolean}
 * The KMP algorithm is exact String match algorithm
 * Return true if txt find pattern.
 * Return false otherwise.
 */
function KMPSearch(pat,txt)
{
    var M = pat.length;
    var N = txt.length;

    // create lps[] that will hold the longest
    // prefix suffix values for pattern
    var lps = [];
    var j = 0; // index for pat[]

    // Preprocess the pattern (calculate lps[]
    // array)
    computeLPSArray(pat, M, lps);

    var i = 0; // index for txt[]
    while ((N - i) >= (M - j)) {
        if (pat.charAt(j) == txt.charAt(i)) {
            j++;
            i++;
        }
        if (j == M) {
            return true;
            // j = lps[j - 1];
        }

        // mismatch after j matches
        else if (i < N && pat.charAt(j) != txt.charAt(i)) {
            // Do not match lps[0..lps[j-1]] characters,
            // they will match anyway
            if (j != 0)
                j = lps[j - 1];
            else
                i = i + 1;
        }
    }
    return false;
}

const movieData = [["The Matrix",7.5,"Action"],["Focus",6.9,"Comedy"],["The Lazarus Effect",6.4,"Thriller"],["Everly",5,"Action"],["Maps to the Stars",7.5,"Drama"]]
var movieOutputlist = movieData;

function filterByName(pattern,data){
    var filterData = [];
    if(typeof pattern == "undefined" || pattern == null){
        movieOutputlist = data;
        return;
    }
    pattern = pattern.trim();
    if(pattern===""){
        movieOutputlist = data;
        return;
    }
    var pat = pattern.toLowerCase();
    for(let i=0;i<data.length;i++){
        var txt = data[i][0].toLowerCase();
        if(KMPSearch(pat,txt)){
            filterData.push(data[i]);
        }
    }
    movieOutputlist = filterData;
}

function filterByGenre(genre,data){
    // Any genre or no input -No need to filter
    if(genre[0] || genre[5]){
        return;
    }
    var filterData = [];
    for(let i=0;i<data.length;i++){
        // Get genre of data
        //console.log(data[i][2]);
        switch (data[i][2].toLowerCase()){
            case "action":
                if(genre[1]){
                    filterData.push(data[i]);
                }
                break;
            case "comedy":
                if(genre[2]){
                    filterData.push(data[i]);
                }
                break;
            case "drama":
                if(genre[3]){
                    filterData.push(data[i]);
                }
                break;
            case "thriller":
                if(genre[4]){
                    filterData.push(data[i]);
                }
                break;
        }
    }
    movieOutputlist = filterData;
}

function filterByRate(rate,data){
    // Any rate or no input -No need to filter
    if(rate[0] || rate[11]){
        return;
    }
    var filterData = [];
    for(let i=0;i<data.length;i++){
        // Get rate of data
        var movieRate = data[i][1];
        switch (true){
            case movieRate<=1 :
                if(rate[1]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=2 :
                if(rate[2]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=3 :
                if(rate[3]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=4 :
                if(rate[4]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=5 :
                if(rate[5]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=6 :
                if(rate[6]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=7 :
                if(rate[7]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=8 :
                if(rate[8]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=9 :
                if(rate[9]){
                    filterData.push(data[i]);
                }
                break;
            case movieRate<=10 :
                if(rate[10]){
                    filterData.push(data[i]);
                }
                break;
        }
    }
    movieOutputlist = filterData;
}


function App(){
    /*Movie Name*/
    const [name, setName] = useState("");
    function handleInputChange(e){
        setName(e.target.value);
        filterByName(e.target.value,movieData);
        filterByGenre(genres,movieOutputlist);
        filterByRate(rates,movieOutputlist);
    }

    /* Rate */
    const [rateOpen, setRateOpen] = useState(false);
    function handelRateButtonClick() {
        setRateOpen(!rateOpen);
    }
    var initialRate = Array(12).fill(false);
    initialRate[11]=true;
    const [rates, setRates] = useState(initialRate);
    function handelRateCheck(i){
        const newRate = rates.slice();
        newRate[i] = ! newRate[i];
        let anyCheck = false;
        for(let k=0;k<11;k++){
            if(newRate[i]){
                anyCheck = true;
                break;
            }
        }
        newRate[11] = !anyCheck;
        filterByName(name,movieData);
        filterByGenre(genres,movieOutputlist);
        filterByRate(newRate,movieOutputlist);
        setRates(newRate);
    }

    /* Genre */
    const [genreOpen, setGenreOpen] = useState(false);
    function handelGenreButtonClick() {
        setGenreOpen(!genreOpen);
    }
    var initialGenre = Array(6).fill(false);
    initialGenre[5] = true;
    const [genres, setGenres] = useState(initialGenre);
    function handelGenreCheck(i){
        const newGenre = genres.slice();
        newGenre[i] = !newGenre[i];
        let anyCheck = false;
        for(let k=0;k<5;k++){
            if(newGenre[i]){
                anyCheck = true;
                break;
            }
        }
        newGenre[5] = !anyCheck;
        filterByName(name,movieData);
        filterByGenre(newGenre,movieOutputlist);
        filterByRate(rates,movieOutputlist);
        setGenres(newGenre);
    }

    return (
        <div>
            <h1>Movie Filter</h1>
            <div id={"nameBlock"}>
            <Name MovieName={name} handleInputChange={handleInputChange} list={movieOutputlist}/>
            <Output list={movieOutputlist}></Output>
            </div>

            <Rate open={rateOpen} handleButtonClick={handelRateButtonClick} rates={rates} handelCheck={handelRateCheck} />

            <Genre open={genreOpen} handelButtonClick={handelGenreButtonClick} genres={genres} handelCheck={handelGenreCheck}/>

        </div>
    );
}

export default App;
