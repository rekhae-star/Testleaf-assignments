function stundentsscore(score) {
    switch (true) {
        case score <35:
            {
                console.log("The grade of student is F and Score =  " + score)
                break
            }
        case score <= 50:
            {
                console.log("The grade of student is D and Score = " + score)
                break
            }
        case score < 85:
            {
                console.log("The grade of student is B and Score =  " + score)
                break
            }
        case score > 85:
            {
                console.log("The grade of student is A and Score =  " + score)
                break
            }
    }

}
stundentsscore(77)