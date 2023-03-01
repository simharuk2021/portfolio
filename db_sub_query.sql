

SELECT movie.mov_title AS "Title", director.dir_fname || ' ' || director.dir_lname  
AS "Director's  Name", rating.rev_stars AS "rating" FROM movie
INNER JOIN movie_direction ON movie.mov_id = movie_direction.mov_id
INNER JOIN director ON movie_direction.dir_id = director.dir_id
INNER JOIN (select * FROM rating WHERE rating IS NOT NULL) rating ON movie.mov_id = rating.mov_id
ORDER BY rating DESC LIMIT 3;










