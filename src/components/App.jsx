import React, { Component } from 'react';
import { GlobalStyle } from "../GlobalStyle";
import { getPhotos } from '../services';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

class App extends Component {
  state = {
    images: [], // Начальный массив изображений
    inputSearch: '', // Поисковый запрос
    page: 1, // Начальная страница отображения запроса
    status: 'idle', // Статус ожидания
    totalImages: 0, // Начальное количество найденных изображений
  };


  componentDidUpdate(prevProps, prevState) {
    // Обнуление prevState.images при обновлении запроса
    if (prevState.inputSearch !== this.state.inputSearch) {
      prevState.images = [];
    }
    // Если обновился inputSearch или page - делаем запрос
    if (prevState.inputSearch !== this.state.inputSearch ||
      prevState.page !== this.state.page) {
      // Включение статуса ожидания ответа сервера (вкл спиннер)
      this.setState({status: 'pending'})
      // Запрос на сервер
      getPhotos(this.state.inputSearch, this.state.page)
        .then(response => (this.setState({
          images: [...prevState.images, ...response.data.hits], // Добавление изображений в массив
          totalImages: response.data.total, // Установка количества найденных изиборажений
          status: 'idle', // Выключение статуса ожидания ответа сервера (выкл спиннер)
        })
        ));      
    }    
  }

  //Функция получения нового запроса
  handleSubmit = (event) => {
    event.preventDefault();
    // Получение запроса из поля input
    this.setState({
      inputSearch: `${Date.now()}/${event.target[1].value.toLowerCase()}`, 
      page: 1, 
      images: [], 
    });
  }

  // Функция добавлений новых фото по кнопке Load more
  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, status, totalImages } = this.state;
    return (
      <div>

        <GlobalStyle /> 

        <Searchbar
          onSubmitForm={this.handleSubmit}
        />
        {/* Рендер списка, если массив изображений не пустой */}
        {images.length !== 0 && <ImageGallery arrImages={this.state.images} />}
        
        {/* Рендер кнопки "Load more", если: 1) массив изображений больше 0 И 2) всего изображений больше 12 И */}
        {/* 3) длинна массива меньше общего кол-ва изображений И 4) status === 'idle' */}
        {((images.length !== 0) && (totalImages > 12) && (images.length < totalImages) && (status === 'idle'))
          && <Button onClickLoadMore={this.handleLoadMore} />} 

        {/* Рендер спиннера во время ожидания ответа сервера */}
        {status === 'pending' && <Loader />}

      </div>
    )
  }
};

export default App;