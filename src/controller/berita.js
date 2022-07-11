const Model = require('../models');
import {
    v4 as uuidv4
} from "uuid";
const {
    Berita
} = Model;

export const index = async (request, response) => {
    if (request.method === 'POST') {
        try {
            const {
                judul,
                konten
            } = request.body;
            let data = {
                judul: judul,
                konten: konten
            };

            if (request.files) {
                let gambar = request.files.gambar;
                let ext = gambar.name.substr(gambar.name.lastIndexOf('.'));
                let name = '/assets/berita/' + uuidv4() + ext;
                gambar.mv('./public' + name)
                data['gambar_cover'] = name;
            }

            await Berita.create(data);
            return response.status(200).json({
                code: 200,
                data: null
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                data: 'Error ' + error
            })
        }
    }
    const data = await Berita.findAll();
    return response.status(200).json({
        code: 200,
        success: 'success',
        data: data
    })
}

export const detail = async (request, response) => {
    let id = request.params.id;
    const data = await Berita.findOne({
        where: {
            id,
        },
    });
    if (!data) {
        return response.status(200).json({
            code: 200,
            success: 'data tidak di temukan!',
            data: null
        })
    }

    if (request.method === 'POST') {
        try {
            const {
                judul,
                konten
            } = request.body;

            let data_request = {
                judul: judul,
                konten: konten
            }
            if (request.files) {
                let gambar = request.files.gambar;
                let ext = gambar.name.substr(gambar.name.lastIndexOf('.'));
                let name = '/assets/berita/' + uuidv4() + ext;
                gambar.mv('./public' + name)
                data_request['gambar_cover'] = name;
            }
            await data.update(data_request);
            return response.status(200).json({
                code: 200,
                data: null
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                data: 'Error ' + error
            })
        }
    }
    return response.status(200).json({
        code: 200,
        data: data
    })
}