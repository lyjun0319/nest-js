import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entitiy';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller("movies")
export class MoviesController {
    
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/search")
    search(@Query('year') searchingYear:string ){
        return `Search Movie ${searchingYear}`
    }

    @Get('/:id')
    getOne(@Param('id') id:number):Movie{
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') delId: number){
        return this.moviesService.deleteOne(delId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto ){
        return this.moviesService.update(movieId, updateData)
    }
}
