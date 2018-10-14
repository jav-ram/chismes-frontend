Universidad del Valle de Guatemala<br>
Sistemas y Tecnologías Web <br>
Samuel Chavez <br>
Javier Ramos - 16230

# Lab #9: Chismes

## State
```javascript

state = {
    gossips: {
        byId: {
            'id': {
                id: '',
                title: '',
                content: '',
                date: new Date(),
            }
        },
        order: [...'ids']
    },
    currentGossip: 'id',
    form: {
        // estado del reductor del form para postear
    }
}

```
* **gossips:** objeto que contendrá todos los chismes
    * **byId:** objeto que contendrá todos los chismes
        * **id:** identificadro
            * **title:** titulo del chisme
            * **content:** contenido del chismes (255 chars)
            * **date:** fecha de publicación:
    * **order:** lista de ids, que representa el orden de los chismes
* **currentGossip:** de estar en la pagina para ver el post, este contendrá la referencia al post que se desea ver.
* **form:** contendrá el estado del formulario para postear un nuevo form
 

## Types

1. GOSSIP_POSTED
2. GOSSIP_REMOVED
3. GOSSIP_UPDATED
4. GOSSIPS_FETCHED
5. VIEW_GETTED
6. VIEW_REMOVED

## Action Creators

### PostGossip
* **params:**
    * **title**
    * **content**
* **return:**
    * **type:** "GOSSIP_POSTED"
    * **payload:**
        * **title**
        * **content**
### RemoveGossip
* **params:**
    * **id**
* **return:**
    * **type:** "GOSSIP_REMOVED"
    * **payload:**
### UpdateGossip
* **params:**
    * **id**
    * **title**
    * **content**
* **return:**
    * **type:** "GOSSIP_UPDATED"
    * **payload:**
        * **id**
        * **title**
        * **content**
### FetchGossips
* **params:**
* **return:**
    * **type:** "GOSSIPS_FETCHED"
    * **payload:**
### SetView
* **params:**
    * **id**
* **return:**
    * **type:** "VIEW_GETTED"
    * **payload:**
        * **id**
### ExitView
* **params:**
* **return:**
    * **type:** "VIEW_REMOVED"
    * **payload:**


## Reducers
* **posts**
  * **type:** Lista de objetos.
  * **default:** []
  * **purpose:** Mantener almacenados los chismes.
    * **byid:** 
      * **type:** objeto.
      * **default:** {}
      * **purpose:** Alamacenar los chismes.
    * **order:** 
      * **type:** Lista.
      * **default:** []
      * **purpose:** Guardar el order de los elementos en el byid.