// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  // Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  // Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  // Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  // Для реализации трех запросов воспользоваться Promise.all().
  // (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
  //     Пример: 
  //     1.  name: Leanne Graham
  //         email: Sincere@april.biz
  //         phone: 1-770-736-8031 x56442
  //         company: Romaguera-Crona    
  //         albums:
  //           Album name 1 (10 photos)
  //           Album name 2 (100 photos)
  //     __________________________________

  //     2.  name: Ervin Howell   
  //         email: Shanna@melissa.tv 
  //         phone: 010-692-6593 x09125
  //         company: Deckow-Crist
  //         albums:
  //           Album name 1 (10 photos)
  //           Album name 2 (100 photos)


class JsonPlaceholderApi {
    #url = 'https://jsonplaceholder.typicode.com';
    #endpoints = {
        users: '/users',
        albums: '/albums',
        photos: '/photos'
    }

    async getUserInfoByEndpoint(endpoint) {
        try {
            const response = await fetch(this.#url + endpoint);
            if (response.status !== 200) throw new Error('Failed to get users');
            return await response.json();
        } catch(err) {
            console.error(err.message);
        }
    }

    async getUserMainInfo(userId) {
        const allUserInfo = await this.getUserInfoByEndpoint(this.#endpoints.users);
        const user = allUserInfo.find(user => user.id === userId);
        if (!user) throw new Error('User not found');
        return  {
            name: user.name,
            email: user.email,
            phone: user.phone,
            company: user.company.name,    
        }
    }

    async getUserAlbums(userId) {
        const allUsersAlbums = await this.getUserInfoByEndpoint(this.#endpoints.albums);
        const userAlbumsInfo = allUsersAlbums.filter(alb => alb.userId === userId);
        if (!userAlbumsInfo.length) throw new Error('Albums not found');
        return userAlbumsInfo;
    }

    async getPhotos(userId) {
        const allUsersPhotos = await this.getUserInfoByEndpoint(this.#endpoints.photos);
        const userAlbums = await this.getUserAlbums(userId);
        // console.log(userAlbums);
        const result = userAlbums.map(alb => this.countPhotosByAlbumId(allUsersPhotos, alb.id, alb.title));
        // return result.reduce((acc, curr) => acc + `${curr.albumTitle} (${curr.amountOfPhotos} photos)\n`, ''); 
        return result.map(alb => `${alb.albumTitle} (${alb.amountOfPhotos} photos)`).join('\n');
    }

    countPhotosByAlbumId(arrOfPhotosInfo, albumId, albumTitle) {
        const amountOfPhotos = arrOfPhotosInfo.filter(photo => photo.albumId === albumId).length;
        return {
            albumId: albumId,
            amountOfPhotos: amountOfPhotos,
            albumTitle: albumTitle
        }
    }

    async getAllUserInfo(userId) {
        const [userInfo, albums] = await Promise.all([this.getUserMainInfo(userId), this.getPhotos(userId)]);
        return {...userInfo, albums};
    }
}
const resp = new JsonPlaceholderApi();
// resp.getUserMainInfo(5).then(res => console.log(res));
// resp.getUserAlbums(5).then(res => console.log(res));
// resp.getPhotos(5).then(res => console.log(res));
resp.getAllUserInfo(5).then(res => console.log(res));

