// loadModel.js

// Import các module cần thiết
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Hàm để load model
async function loadModel(modelPath) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            modelPath,
            (gltf) => {
                // Model đã được load thành công
                resolve(gltf.scene);
            }, 
            undefined, // Không cần callback progress ở đây
            (error) => {
                // Xảy ra lỗi khi load model
                reject(error);
            }
        );
    });
}

// Hàm để load tất cả các model và trả về một mảng chứa các đối tượng có dạng {type: "grass", model: model}
export async function loadAllModels(modelPaths) {
    try {
        const models = [];
        for (const modelPath of modelPaths) {
            const model = await loadModel(modelPath.path);
            models.push({ type: modelPath.type, model: model });
        }
        return models;
    } catch (error) {
        console.error('Lỗi khi load model:', error);
        return []; // Trả về một mảng rỗng nếu có lỗi xảy ra
    }
}
