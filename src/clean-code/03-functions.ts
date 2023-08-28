(() => {

    function getMovieById( Id: string ) {
        console.log({ Id });
    }

    function getMovieCastById( MovieId: string ) {
        console.log({ MovieId });
    }

    function getActorBioById( Id: string ) {
        console.log({ Id });
    }
    

    interface Movie{
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    function createMovie({title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {

        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    // Continuacion

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) return  1500;
    
        if ( isSeparated ) return 2500;
        
        return isRetired ? 3000 : 4000;       
        
    }

})();