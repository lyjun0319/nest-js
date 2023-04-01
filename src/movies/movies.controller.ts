import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entitiy';

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
    getOne(@Param('id') id:string):Movie{
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData){
        this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') delId: string){
        return this.moviesService.deleteOne(delId);
    }

    @Patch('/:id')
    patch(@Param('id') patchId: string){
        return `Patch Movie Id: ${patchId}`
    }
}
